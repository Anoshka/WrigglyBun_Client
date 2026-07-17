/**
 * Friendly Studio sidebar so your client finds everything easily.
 */
export const structure = (S) =>
  S.list()
    .title('Edit your website')
    .items([
      S.listItem()
        .title('Home Page')
        .id('homePage')
        .child(S.document().schemaType('homePage').documentId('homePage').title('Home Page')),
      S.listItem()
        .title('About Page')
        .id('aboutPage')
        .child(S.document().schemaType('aboutPage').documentId('aboutPage').title('About Page')),
      S.listItem()
        .title('Contact & Business Info')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Contact & Business Info'),
        ),
      S.divider(),
      S.documentTypeListItem('service').title('Services (pricing & photos)'),
      S.documentTypeListItem('faq').title('FAQs'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.divider(),
      S.documentTypeListItem('blogPost').title('Blog Posts'),
      S.documentTypeListItem('event').title('Upcoming Events'),
    ])
