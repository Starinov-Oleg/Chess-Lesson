/** This file for state from app for display view components. */
const state = {
  /**FromDB Will fix. Now it use for presentation idea */
  chessplay: {
    name_you: 'You',
    name_rival: 'Rival',
  },
  //-----------------------------------
  /** Now it work from Redux store */
  /**From DB */
  // events: [
  //   { id: 0, title: 'Develop', text: 'here first text', data: '10.02.22' },
  //    { id: 1, title: 'Develop1', text: 'here first text', data: '10.02.22' },
  //  ],
  /**From DB */
  // contact: [
  //   { id: 0, name: 'Dung', text: 'Here text' },
  //    { id: 1, name: 'Dung1', text: 'Here text1' },
  //  ],
  //------------------------------------
  /**Learn page. Value for item video, toggles functions */
  learn: {
    video1: 'https://www.youtube.com/embed/OZWRM2WG8Kg',
    video2: 'http://www.youtube.com/embed/p1QgNF6J1h0?rel=0&controls=0&hd=1&showinfo=0&enablejsapi=1',
    /**learn toggle button */
    toggle(setShow: any, setShowPic: any, setShow2: any) {
      setShow(true)
      setShowPic(null)
      setShow2(null)
    },
    toggle2(setShow: any, setShowPic: any, setShow2: any) {
      setShow2(true)
      setShowPic(null)
      setShow(null)
    },
  },
  /**Landing page. Values for display different section */
  landing: {
    /**value ul list Landing Page*/
    contentSafe: {
      lists: [
        'Activity report',
        'Non stop contact with cauch and teacher',
        'Only kids content',
        'Attention to every child',
      ],
    },
    /**value ul list Landing Page*/
    contentCouching: {
      lists: ['School manage', 'Report student progress', 'Organize tournaments', 'Couching education material'],
    },
    /**value ul list Landing Page*/
    contentProgramm: {
      lists: [
        'Student study material',
        'Chess report cards',
        'Organize tournaments',
        'Individual and foreigner chess programm',
      ],
    },
  },
  /**menu pages */
  navlinkItems: [
    { id: 0, href: 'home', name: 'home', icon: '/assets/header-pages/home.png' },
    { id: 1, href: '/play', name: 'Play', icon: '/assets/header-pages/play.png' },
    { id: 2, href: 'chesslearn', name: 'Learn', icon: '/assets/header-pages/adventure.png' },
    { id: 3, href: 'chesslandcoaches', name: 'Coaching', icon: '/assets/header-pages/coach.png' },
    { id: 4, href: 'contact', name: 'Contact', icon: '/assets/header-pages/connect.png' },
    { id: 5, href: 'events', name: 'Events', icon: '/assets/header-pages/event.png' },
    { id: 6, href: 'adventure', name: 'Adventure', icon: '/assets/header-pages/learn.png' },
  ],
}

export default state

/** TODO type */
