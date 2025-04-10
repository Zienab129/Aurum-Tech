import { loadCaseStudies } from '@/lib/mdx'
import HomeContent from '@/components/home-content'

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return <HomeContent caseStudies={caseStudies} />
}
