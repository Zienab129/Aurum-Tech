import { loadCaseStudies } from '@/lib/mdx'
import { Work } from './work-client'

export default async function WorkPage() {
  const caseStudies = await loadCaseStudies()
  return <Work caseStudies={caseStudies} />
}
