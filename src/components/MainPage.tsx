import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { CustomTable } from "../containers/CustomTable";

import { Pages } from "../constants/Pages";
import { PricePlans } from "../constants/PricePlans";
import { Products } from "../constants/Products";

export const MainPage = (): JSX.Element => {
  const formatedProducts = Products.map((product) => {
    const { options, ...rest } = product;
    return { ...rest, size: options.size, amount: options.amount };
  });

  return (
    <>
      <Tabs
        defaultActiveKey="tab1"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="tab1" title="Table1">
          <CustomTable content={Pages} />
        </Tab>
        <Tab eventKey="tab2" title="Table2">
          <CustomTable content={PricePlans} />
        </Tab>
        <Tab eventKey="tab3" title="Table3">
          <CustomTable content={formatedProducts} />
        </Tab>
      </Tabs>
    </>
  );
};
