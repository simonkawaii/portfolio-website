import Section from "../../components/Wrappers/Section";
import Card from "../../components/Offer/Card";

const Portfolio = () => {
  return (
    <Section
      className="flex  flex-col flex-wrap md:flex-row gap-8"
      id="portfolio"
    >
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </Section>
  );
};

export default Portfolio;
