import type { MetaRecord } from "nextra";

export default {
  index: {
    title: 'Home',
    type: 'page',
    display: 'hidden',
    theme: {
        layout: 'full',
        toc: true,
        timestamp: true,
        sidebar: true,
        pagination: false,
        breadcrumb: false,
        copyPage: false,
        collapsed: true
    }
  },
  guide: {
    title: 'Documentation',
    type: 'page'
  },
  contribute: {
    title: 'Contribute',
    type: 'page'
  },
  roadmap: {
    type: 'page',
    theme: {
        layout: 'full'
    }
  }

} as MetaRecord