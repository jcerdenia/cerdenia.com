export type MediaDataItem = {
  title: string,
  widget: string,
  note?: string
}

const media: MediaDataItem[] = [
  {
    title: "Music for Marimba and Strings",
    widget: `
      <iframe width="100%" height="300" src="https://www.youtube.com/embed/videoseries?list=PL0FOcqCh9JYV3XtCDlqny98Ml6lbkOIor" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `,
    note: "Ensemble Gô – Yokohama Concert"
  },
  {
    title: "Music for Orchestra",
    widget: `
      <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/690884643&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
      <a href="https://soundcloud.com/joshuacerdenia" title="Joshua Cerdenia" target="_blank" style="color: #cccccc; text-decoration: none;">Joshua Cerdenia</a> · <a href="https://soundcloud.com/joshuacerdenia/sets/music-for-orchestra-and-large" title="Music for Orchestra and Large Ensemble" target="_blank" style="color: #cccccc; text-decoration: none;">Music for Orchestra and Large Ensemble</a>
    `
  },
  {
    title: "Art Song & Vocal Chamber Music",
    widget: `
      <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/690944991&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
      <a href="https://soundcloud.com/joshuacerdenia" title="Joshua Cerdenia" target="_blank" style="color: #cccccc; text-decoration: none;">Joshua Cerdenia</a> · <a href="https://soundcloud.com/joshuacerdenia/sets/art-song-and-vocal-chamber" title="Art Song and Vocal Chamber Music" target="_blank" style="color: #cccccc; text-decoration: none;">Art Song and Vocal Chamber Music</a>
      </div>
    `
  },
  {
    title: "Chamber Music",
    widget: `
      <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/690843903&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
      <a href="https://soundcloud.com/joshuacerdenia" title="Joshua Cerdenia" target="_blank" style="color: #cccccc; text-decoration: none;">Joshua Cerdenia</a> · <a href="https://soundcloud.com/joshuacerdenia/sets/chamber-music" title="Chamber Music" target="_blank" style="color: #cccccc; text-decoration: none;">Chamber Music</a>
      </div>
    `
  }
]

export default media