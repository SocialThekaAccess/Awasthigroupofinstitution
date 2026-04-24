import Hero from '../../components/sections/Hero/Hero'
import MegaStage from '../../components/sections/MegaStage/MegaStage'
import Showcase from '../../components/sections/Showcase/Showcase'
import PlacementsSpotlight from '../../components/sections/PlacementsSpotlight/PlacementsSpotlight'
import OverviewGrid from '../../components/sections/OverviewGrid/OverviewGrid'
import { useScrollY } from '../../hooks/useScrollY'
import './HomePage.css'

export default function HomePage() {
  const scrollY = useScrollY()

  const heroParallaxStyle = {
    transform: `translate3d(0, ${Math.max(-64, scrollY * -0.08)}px, 0) scale(1.08)`,
  }

  const showcaseParallaxStyle = {
    transform: `translate3d(0, ${Math.max(-54, scrollY * -0.05)}px, 0) scale(1.05)`,
  }

  return (
    <div className="page homepage">
      <Hero parallaxStyle={heroParallaxStyle} />
      <MegaStage activeSection="about" parallaxStyle={showcaseParallaxStyle} />
      <Showcase />
      <PlacementsSpotlight />
      <OverviewGrid />
    </div>
  )
}