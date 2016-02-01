import Ember from 'ember';

const { computed } = Ember;
const { service } = Ember.inject;

const groupedSections = [
  {
    groupName: 'Getting started',
    options: [
      { route: 'public-pages.docs.index',              text: 'Overview' },
      { route: 'public-pages.docs.installation',       text: 'Installation' },
      { route: 'public-pages.docs.how-to-use-it',      text: 'How to use it' },
      { route: 'public-pages.docs.action-handling',    text: 'Action handling' },
      { route: 'public-pages.docs.groups',             text: 'Groups' },
      { route: 'public-pages.docs.multiple-selection', text: 'Multiple selection' }
    ]
  },
  {
    groupName: 'Basic customization',
    options: [
      { route: 'public-pages.docs.the-list',         text: 'The list' },
      { route: 'public-pages.docs.the-trigger',      text: 'The trigger' },
      { route: 'public-pages.docs.the-search',       text: 'The Search' },
      { route: 'public-pages.docs.styles',           text: 'Styles' },
    ]
  },
  {
    groupName: 'Advanced customization',
    options: [
      { route: 'public-pages.docs.asynchronous-search', text: 'Asynchronous search' },
    ]
  },
  {
    groupName: 'Other',
    options: [
      { route: 'public-pages.docs.test-helpers', text: 'Test helpers' },
      { route: 'public-pages.docs.troubleshooting', text: 'Troubleshooting' },
      { route: 'public-pages.docs.architecture', text: 'Architecture' },
      { route: 'public-pages.docs.api-reference', text: 'API reference' }
    ]
  }
];

export default Ember.Controller.extend({
  routing: service('-routing'),
  groupedSections: groupedSections,

  currentSection: computed('routing.currentRouteName', function() {
    const currentRouteName = this.get('routing.currentRouteName');
    for (let group of groupedSections) {
      for (let section of group.options){
        if (section.route === currentRouteName) {
          return section;
        }
      }
    }
  }),

  actions: {
    visit(section) {
      this.transitionToRoute(section.route);
    }
  }
});
