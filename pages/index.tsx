import Head from "next/head"
import { useState } from "react"
import { Container } from "react-bootstrap"
import FrontImage from "../components/FrontImage"
import MediaModal from "../components/MediaModal"
import { parseContent } from "../lib/markdown"

export default function Home({ bio }): React.ReactElement {
  const [showFeaturedMedia, setShowFeaturedMedia] = useState(false);

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
        <section dangerouslySetInnerHTML={{ __html: bio }} />
      </Container>
      
      <MediaModal
        show={showFeaturedMedia} 
        onHide={() => setShowFeaturedMedia(false)}
      />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: { 
      bio: parseContent("data/bio-short.md") 
    }
  }
}