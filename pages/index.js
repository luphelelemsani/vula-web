import withSession from "../lib/session";
import marqetaClient from "../lib/marqetaClient";

import Layout from "../components/Layout";
import CardItems from "../components/CardItems";

const Home = ({ user, cvvNumber, cardPAN, expireDate }) => (
  <Layout>
    <div className="my-12">
      <CardItems
        cvvNumber={cvvNumber}
        cardPAN={cardPAN}
        expireDate={expireDate}
      />
    </div>
  </Layout>
);
export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get("user");

  if (!user) {
    return {
      redirect: {
        destination: "/signup",
        permanent: false,
      },
    };
  }

  // TODO: Get the users balance via /balances/{user.mqUser.token}
  const mqBalanceResponse = await marqetaClient.get(
    `/balances/${user.mqUser.token}`
  );
  const balance = mqBalanceResponse.data;
  console.log("Balance: ", balance);

  return {
    props: {
      user: req.session.get("user"),
      cardPAN: user.mqCard.pan,
      cvvNumber: user.mqCard.cvv_number,
      expireDate: user.mqCard.expiration,
    },
  };
});
export default Home;
