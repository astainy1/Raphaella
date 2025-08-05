import type { Schema, Struct } from '@strapi/strapi';

export interface FaqAccordionFaq extends Struct.ComponentSchema {
  collectionName: 'components_faq_accordion_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'information';
  };
  attributes: {
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    SubjectTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HeroSliderSlider extends Struct.ComponentSchema {
  collectionName: 'components_hero_slider_sliders';
  info: {
    displayName: 'Slider';
    icon: 'folder';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Unique;
    title: Schema.Attribute.String & Schema.Attribute.Unique;
  };
}

export interface HomePageGalleryHomePageGallery extends Struct.ComponentSchema {
  collectionName: 'components_home_page_gallery_home_page_galleries';
  info: {
    displayName: 'HomePageGallery';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'faq-accordion.faq': FaqAccordionFaq;
      'hero-slider.slider': HeroSliderSlider;
      'home-page-gallery.home-page-gallery': HomePageGalleryHomePageGallery;
    }
  }
}
