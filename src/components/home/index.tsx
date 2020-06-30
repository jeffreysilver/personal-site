import styles from "./styles/index.module.scss";
import ListItem from "./ListItem";

const Page: React.SFC = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.name}>i'm jeffrey</div>
        <div>i'm a product obsessed engineer</div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeading}>work</div>
        <div>
          co-founder and head of engineering @ opus, building sms based training
          for frontline workers
        </div>
        <div>formerly managed by q, into, the late app</div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeading}>on the web</div>
        <ul className={styles.list}>
          <ListItem
            title="jeffreysilver@hey.com"
            link="mailto:jeffreysilver@hey.com"
          />
          <ListItem title="twitter" link="https://twitter.com/jeffrey_silver" />
          <ListItem
            title="linkedin"
            link="https://www.linkedin.com/in/jeffrey-silver-96007ab0/"
          />
          <ListItem title="github" link="https://github.com/jeffreysilver/" />
        </ul>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionHeading}>toolkit</div>
        <ul className={styles.list}>
          <ListItem title="notion" link="https://notion.so/" />
          <ListItem title="apollo" link="https://apollographql.com/" />
          <ListItem title="hey" link="https://hey.com/" />
          <ListItem title="poolside.fm" link="https://poolside.fm/" />
          <ListItem title="serverless" link="https://serverless.com/" />
          <ListItem title="figma" link="https://figma.com/" />
          <ListItem title="nucleo" link="https://nucleoapp.com/" />
          <ListItem title="django" link="https://djangoproject.com/" />
          <ListItem title="typescript" link="http://typescript.com//" />
          <ListItem title="nextjs" link="https://nextjs.org/" />
          <ListItem title="zapier" link="https://zapier.com/" />
          <ListItem title="sigma" link="https://www.sigmacomputing.com//" />
          <ListItem title="snowflake" link="https://www.snowflake.com" />
        </ul>
      </div>
    </div>
  );
};

export default Page;
