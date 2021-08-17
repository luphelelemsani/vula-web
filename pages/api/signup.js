import withSession from "../../lib/session";
import marqetaClient from "../../lib/marqetaClient";

export default withSession(async (req, res) => {
  const { email, firstName, lastName } = await req.body;

  try {
    const user = {
      isSignedIn: true,
      email: email,
      firstName: firstName,
      lastName: lastName,
    };

    // --------------------------------------------------------------------------------

    // 1. Create the user on the Marqeta Platform.
    const mqUserResponse = await marqetaClient.post("/users", {
      first_name: firstName,
      last_name: lastName,
      email: email,
      active: true,
    });
    const mqUser = mqUserResponse.data;
    console.log("Created user: ", mqUser);

    // 2. Create a card for the Marqeta user, linked to the pre-defined card product.
    // https://www.marqeta.com/docs/developer-guides/core-api-quick-start#_step_2_get_a_card_product_token
    const mqCardsResponse = await marqetaClient.post(
      "/cards?show_cvv_number=true&show_pan=true",
      {
        card_product_token: "8fe3d88a-e3eb-43dc-80b6-9d85404699df",
        user_token: mqUser.token,
        expiration_offset: {
          unit: "DAYS",
          value: 1,
        },
      }
    );
    const mqCard = mqCardsResponse.data;
    console.log("Created card: ", mqCard);

    // 3. Fund the card
    // https://www.marqeta.com/docs/developer-guides/core-api-quick-start#_create_a_gpa_order_to_fund_a_user_account
    const mqGPAOrderResponse = await marqetaClient.post("/gpaorders", {
      user_token: mqUser.token,
      amount: "100.00",
      currency_code: "USD",
      funding_source_token: "4a70d056-e713-4341-a32f-95e8b18f4440",
    });
    const mqGPAOrder = mqGPAOrderResponse.data;
    console.log("GPA Order: ", mqGPAOrder);

    // 4. Store user and card on the session for the purposes of this sample app
    user.mqUser = mqUser;
    user.mqCard = mqCard;

    // --------------------------------------------------------------------------------

    req.session.set("user", user);
    await req.session.save();
    res.json(user);
  } catch (error) {
    console.error(error);
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.data);
  }
});
