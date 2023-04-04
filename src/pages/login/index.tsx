import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from "next/link";

import styles from './login.module.css'

import Image from 'next/image'

import * as Input from '../../components/Input'


export default function Home() {
  const { t } = useTranslation('common')
  const { asPath, route, push } = useRouter()

  return (
    <>
        <main className={styles.login__main}>
            <div className={styles.login__left}>
                <Image src="/icon/dice-d20.svg" alt="dice-20" width={500} height={500} />
            </div>

            <div className={styles.login__right}>
                <div className={styles.login__container}>
                  <Image className={styles.login__image} src="/icon/dice-d20.svg" alt="dice-20" width={150} height={150} />

                  <form action="submit" className={styles.login__form}>
                    <Input.Root>
                      <Input.Container className={`out ${styles.login__inputContainer}`}>
                        <Input.FormField type="text" name="username" id="username" />
                        <Input.Label htmlFor="username" label={t('login.username')} className={`origin-0 -z-1 ${styles.login__label}`} />
                      </Input.Container>
                    </Input.Root>

                    <Input.Root>
                    <Input.Container className={`out ${styles.login__inputContainer}`}>
                      <Input.FormField type="password" name="password" id="password" />
                        <Input.Label htmlFor="password" label={t('login.password')} className={`origin-0 -z-1 ${styles.login__label}`} />
                      </Input.Container>
                    </Input.Root>

                    <button className={styles.login__button}>
                      {t('login.submit')}
                    </button>
                  </form>
                </div>
            </div>
        </main>
    </>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  const res = await serverSideTranslations(locale, ['common'])
  return {
    props: {
      ...res
    }
  }
}
