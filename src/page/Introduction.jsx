import React from 'react'
import { useTranslation } from 'react-i18next';
import CompanyOverview from '../components/GeneralIntroductionPage/CompanyOverview';
import CompanyProduct from '../components/GeneralIntroductionPage/CompanyProduct';
import CompanyStructure from '../components/GeneralIntroductionPage/CompanyStructure';
import CompanyMaterial from '../components/GeneralIntroductionPage/CompanyMaterial';
import CompanyInfrastructure from '../components/GeneralIntroductionPage/CompanyInfrastructure';

const Introduction = () => {
  const { t } = useTranslation();
  const intro = t("GeneralIntroduction");
  return (
    <div className='font-mainR flex flex-col z-0'>
      <CompanyOverview intro={intro} />
      <CompanyProduct intro={intro} />
      <CompanyStructure intro={intro} />
      <CompanyInfrastructure intro={intro} />
      <CompanyMaterial intro={intro} />
    </div>
  )
}

export default Introduction