import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


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
      <header>
        <h1 className="text-3xl font-bold">
          {t('home.title')}
        </h1>
        
        <div>
          <ul>
            <li onClick={() => handleLocaleChange('pt')}>
              {t('home.mainLanguage')}
            </li>


            <li onClick={() => handleLocaleChange('en')}>
              {t('home.secondLanguage')}
            </li>
          </ul>
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
