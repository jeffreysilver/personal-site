import styles from "./styles/index.module.scss";

const Page = () => {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.name}>i'm jeffrey</div>
                <div>i'm a product obsessed engineer</div>

            </div>

            <div className={styles.section}>
                <div className={styles.sectionHeading}>work</div>
                <div>co-founder and head of engineering @ ESL Works</div>
                <div>formerly managed  by q, into, the late app</div>
            </div>

            <div className={styles.section}>

                <div className={styles.sectionHeading}>on the web</div>
                <ul className={styles.socialList}>
                    <li>
                        <a target="_blank" href="mailto:jeffreysilver@hey.com">jeffreysilver@hey.com</a>

                    </li>
                    <li>
                        <a target="_blank" href="https://github.com/jeffreysilver/">github</a>

                    </li>

                    <li>
                        <a target="_blank" href="https://twitter.com/jeffrey_silver">twitter</a>

                    </li>

                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/jeffrey-silver-96007ab0/">linkedin</a>

                    </li>
                </ul>

            </div>



        </div>
    )
};

export default Page;
