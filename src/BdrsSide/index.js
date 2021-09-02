module.exports = [
  {
    type: 'matcher',
    name: 'Bdrst',
    matcher: 'Bdrst',
    allowParamToValue: true,
    styles: {
      'border-top-left-radius': '$0',
      'border-top-right-radius': '$0'
    }
  },
  {
    type: 'matcher',
    name: 'Bdrsb',
    matcher: 'Bdrsb',
    allowParamToValue: true,
    styles: {
      'border-bottom-left-radius': '$0',
      'border-bottom-right-radius': '$0'
    }
  },
  {
    type: 'matcher',
    name: 'Bdrsstart',
    matcher: 'Bdrsstart',
    allowParamToValue: true,
    styles: {
      'border-top-__START__-radius': '$0',
      'border-bottom-__START__-radius': '$0'
    }
  },
  {
    type: 'matcher',
    name: 'Bdrsend',
    matcher: 'Bdrsend',
    allowParamToValue: true,
    styles: {
      'border-top-__END__-radius': '$0',
      'border-bottom-__END__-radius': '$0'
    }
  },
];
