import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from "next/link";


export default function Home() {
  const { t } = useTranslation('common')
  const { asPath, route, push } = useRouter()

  const handleLocaleChange = (value: string) => {
    push(route, asPath, {
      locale: value
    })
  }

  return (
    <div>
      <header className="flex justify-center items-center gap-4">
        <h1 className="text-3xl font-bold">
          {t('home.title')}
        </h1>
        
        <div className="flex justify-center items-center gap-4">
          <div className="flex justify-center items-center gap-4">
            <ul>
              <li onClick={() => handleLocaleChange('pt')}>
                {t('home.mainLanguage')}
              </li>


              <li onClick={() => handleLocaleChange('en')}>
                {t('home.secondLanguage')}
              </li>
            </ul>
          </div>

          <div>
            <Link href="/login">
              {t('home.login')}
            </Link>
          </div>
        </div>
      </header> 
    </div>
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
