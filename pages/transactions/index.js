import Layout from "../../components/Layout";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3004/Transactions");
  const data = await res.json();

  return {
    props: { products: data },
  };
};

const Products = ({ products }) => {
  console.log(products);

  return (
    <Layout>
      <div className="flex justify-center items-center h-full bg-blue-lightest flex-col gap-3">
        {products.map((product) => (
          <div
            id="app"
            className="bg-white w-128 h-60 rounded shadow-md flex card text-grey-darkest"
          >
            <img
              className="w-1/2 h-full rounded-l-sm"
              src={product.image}
              alt="Room Image"
            />
            <div className="w-full flex flex-col">
              <div className="p-4 pb-0 flex-1">
                <h3 className="font-light mb-1 text-grey-darkest">
                  {product.card_acceptor_name}
                </h3>
                <div className="text-xs flex items-center mb-2 text-blue-500">
                  Pay in 4
                </div>
                <span className="text-5xl text-grey-darkest">
                  ${product.amount}
                </span>
                <div className="flex items-center mt-2">
                  <div className="pr-2 text-xs">
                    Paid $
                    {product.repayment.installment_amount *
                      product.repayment.installment_value}{" "}
                    of ${product.amount}
                  </div>
                </div>
              </div>
              <div className="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                Pay Now
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Products;
