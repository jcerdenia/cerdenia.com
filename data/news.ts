export interface NewsItem {
  title: string;
  url: string;
  source: string;
  date: string;
}

export interface NewsItemGroup {
  title: string;
  items: NewsItem[];
}

const events: NewsItemGroup = {
  title: "Recent & Upcoming Events",
  items: [
    {
      title: "Satélite 17. Entre cuerdas y palabras",
      date: "3 May 2022",
      source: "Orquesta Nacional de España",
      url: "http://ocne.mcu.es/programacion/satelite-17-entre-cuerdas-y-palabras",
    },
    {
      title: "Vim: 10th Wave x Yuki Tokuda Dance Collaboration Concert",
      date: "4 Jun 2021",
      source: "I Care If You Listen TV",
      url: "https://icareifyoulisten.tv/vim-10th-wave-x-yuki-tokuda-dance-collaboration-concert/",
    },
    {
      title: "A Closer Look at Swell",
      date: "29 Jun 2021",
      source: "Asian American Arts Alliance",
      url: "https://www.aaartsalliance.org/events/a-closer-look-at-swell-intimate-conversaations-with-asian-immigrants-and-children-of-asian-immigrants-who-turned-their-stories-into-song",
    },
    {
      title: "Swell in Off-Broadway at HERE 2021",
      date: "17-21 Mar 2021",
      source: "HERE",
      url: "https://www.broadwayworld.com/off-broadway/regional/Swell-2806900",
    },
  ],
};

const articles: NewsItemGroup = {
  title: "Reviews & Articles",
  items: [
    {
      title: "Melisa Tien's SWELL to Premiere Online at HERE",
      date: "Feb 2021",
      source: "Broadway World",
      url: "https://www.broadwayworld.com/off-off-broadway/article/HERE-Presents-the-Premiere-of-Melisa-Tiens-SWELL-20210216",
    },
    {
      title: "Carla Canales Navigates Cultural In-Betweens in “Duende”",
      date: "Nov 2020",
      source: "I Care If You Listen",
      url: "https://icareifyoulisten.com/2020/11/carla-canales-navigates-cultural-in-betweens-in-duende/",
    },
    {
      title: "IndieWorks Announces BITE-SIZED BROADWAY- A Mini-Musical Podcast",
      date: "Aug 2020",
      source: "Broadway World",
      url: "https://www.broadwayworld.com/off-broadway/article/IndieWorks-Announces-BITE-SIZED-BROADWAY--A-Mini-Musical-Podcast-20200803",
    },
    {
      title:
        "Virginia Symphony Orchestra offers exciting evening filled with sound and fury",
      date: "Mar 2020",
      source: "The Virginia Gazette",
      url: "https://www.dailypress.com/virginiagazette/va-vg-virginia-symphony-0311-20200310-msj7psw6tbb5jhvt635bjkrqte-story.html",
    },
    {
      title:
        "Photo Flash: First Look at Melisa Tien's SWELL at Here Arts Center",
      date: "Jul 2019",
      source: "Broadway World",
      url: "https://www.broadwayworld.com/off-off-broadway/article/Photo-Flash-First-Look-at-Melisa-Tiens-SWELL-at-Here-Arts-Center-20190720",
    },
    {
      title: "In Review: SWELL",
      date: "Jul 2019",
      source: "National Sawdust Log",
      url: "https://nationalsawdust.org/thelog/2019/07/17/in-review-swell/?fbclid=IwAR2AdLaBN6-5fml8ixbkCkP0ZUH8sgMQbPe9g4oXjl3Q01F5uZQswvrB3Cw",
    },
    {
      title:
        "Detroit Symphony Orchestra - Leonard Slatkin conducts Feuertrunken & Mahler 9",
      date: "Dec 2017",
      source: "Classical Source",
      url: "http://www.classicalsource.com/db_control/db_concert_review.php?id=15046",
    },
    {
      title: "New Music, New Voices",
      date: "Fall 2017",
      source: "Performance Vol. XXVI",
      url: "https://issuu.com/detroitsymphony/docs/perf1718_wrapb_2bb1_w/18",
    },
    {
      title: "Color and Contrasts from the New Juilliard Ensemble",
      date: "Apr 2016",
      source: "The New York Times",
      url: "http://www.nytimes.com/2016/04/26/arts/music/review-color-and-contrasts-from-the-new-juilliard-ensemble.html?_r=0",
    },
    {
      title: "The Art of Composing: New Juilliard Ensemble",
      date: "Apr 2016 ",
      source: "The Juilliard Journal",
      url: "http://journal.juilliard.edu/journal/1604/art-composing-new-juilliard-ensemble",
    },
    {
      title: "Composer Advocacy Notebook: A Tale of Three Cities",
      date: "Feb 2016",
      source: "New Music Box",
      url: "http://www.newmusicbox.org/articles/a-tale-of-three-cities/",
    },
    {
      title: "Young Composers Hone Their Craft and Hear Results",
      date: "Feb 2016 ",
      source: "Classical Voice America",
      url: "http://classicalvoiceamerica.org/2016/02/09/young-composers-hone-their-craft-and-hear-results/",
    },
    {
      title: "'Future Classics' Priceless for Young Composers",
      date: "Feb 2016",
      source: "Star Tribune",
      url: "http://www.startribune.com/future-classics-priceless-for-young-composers/367104161/",
    },
    {
      title: "Meet a Composer: Joshua Cerdenia",
      date: "Jan 2016",
      source: "Minnesota Orchestra",
      url: "https://www.minnesotaorchestra.org/showcase/91-joshua-cerdenia",
    },
    {
      title: "More April NYC Concert Reviews from Mark Greenfest",
      date: "May 2015",
      source: "SoundWordSight",
      url: "http://soundwordsight.com/?p=1453",
    },
    {
      title: "Student Composers' Works",
      date: "Apr 2015",
      source: "The Juilliard Journal",
      url: "http://journal.juilliard.edu/journal/1504/student-composers",
    },
  ],
};

const broadcast: NewsItemGroup = {
  title: "Broadcast",
  items: [
    {
      title: "The Getaway",
      date: "Oct 2020",
      source: "Bite-Sized Broadway",
      url: "https://www.indieworkstheatre.com/bsb-the-getaway",
    },
    {
      title: "Maestro Filipino - Listen Again!",
      date: "Nov 2017",
      source: "98.7 DZFE The Master's Touch",
      url: "http://dzfe.febc.ph/maestro-filipino-listen-again/",
    },
  ],
};

const news: NewsItemGroup[] = [events, articles, broadcast];

export default news;
