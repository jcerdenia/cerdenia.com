import Head from "next/head"
import { useState } from "react"
import { Container } from "react-bootstrap"
import FrontImage from "../components/FrontImage"
import MediaModal from "../components/MediaModal"

export default function Home(): React.ReactElement {
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

      <MediaModal
        show={showFeaturedMedia} 
        onHide={() => setShowFeaturedMedia(false)}
      />
    </>
  )
}