import Head from "next/head"
import { useState } from "react"
import { Container } from "react-bootstrap"
import FrontImage from "../components/FrontImage"
import MediaModal from "../components/MediaModal"
import MediaGrid from "../components/MediaGrid"
import { markdownToHtml } from "../lib/markdown"

type HomePageProps = {
  props: {
    shortBio: string
  }
}

const Home = ({ shortBio }: HomePageProps["props"]): React.ReactElement => {
  const [showFeaturedMedia, setShowFeaturedMedia] = useState(false)

  return (
    <>
      <Head>
        <title>Joshua Cerdenia Music</title>
      </Head>
      <FrontImage>
        <Container className="play-icon-container">
          <i 
            className="bi bi-play-circle play-icon" 
            onClick={() => setShowFeaturedMedia(true)}
          />
        </Container>
      </FrontImage>
      <Container className="py-4">
        <section dangerouslySetInnerHTML={{ __html: shortBio }} />
      </Container>
      <MediaGrid />
      
      <MediaModal
        show={showFeaturedMedia} 
        onHide={() => setShowFeaturedMedia(false)}
      />
    </>
  )
}

export const getStaticProps = async (): Promise<HomePageProps> => {
  return {
    props: { 
      shortBio: markdownToHtml("data/bio-short.md") 
    }
  }
}

export default Home