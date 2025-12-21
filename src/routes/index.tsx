import { createFileRoute } from '@tanstack/react-router'
import { products } from "../data/products";
import HeroSection from '@/components/HeroSection'
import RecommendedSection from '@/components/RecommendedSection'


export const Route = createFileRoute('/')({
    component: App,
    loader: () => {
      return { products };
    }
  })



function App() {

  return (
    <>
      <div className="space-y-12 bg-linear-to-b from-slate-50 via-white to-slate-50 p-6">
        <HeroSection />
        <RecommendedSection products={products}/>
      </div>
    </>
  )
}
