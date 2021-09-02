module.exports = [
  {
    type: 'matcher',
    name: 'Brdst',
    matcher: 'Brdst',
    allowParamToValue: true,
    styles: {
      'border-top-left-radius': '$0',
      'border-top-right-radius': '$0'
    }
  },
  {
    type: 'matcher',
    name: 'Brdsb',
    matcher: 'Brdsb',
    allowParamToValue: true,
    styles: {
      'border-bottom-left-radius': '$0',
      'border-bottom-right-radius': '$0'
    }
  },
  {
    type: 'matcher',
    name: 'Brdsstart',
    matcher: 'Brdsstart',
    allowParamToValue: true,
    styles: {
      'border-top-__START__-radius': '$0',
      'border-bottom-__START__-radius': '$0'
    }
  },
  {
    type: 'matcher',
    name: 'Brdsend',
    matcher: 'Brdsend',
    allowParamToValue: true,
    styles: {
      'border-top-__END__-radius': '$0',
      'border-bottom-__END__-radius': '$0'
    }
  },
];
