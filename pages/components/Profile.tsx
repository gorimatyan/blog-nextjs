import { NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";
import styles from "./Profile.module.scss"

const name: string = "のぐ　のぐお"

type Props = {
    children: ReactNode
}
const Profile: NextPage<Props> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                <img className={styles.profile_image} src="images/Management-50px.png" alt="プロフィール画像" />
                <h1>{name}</h1>
            </header>

            {/* index,jsの<Profile>　ここがchildren　</Profile> */}
            <main>{children}</main>
        </div>

    );
}

export default Profile;