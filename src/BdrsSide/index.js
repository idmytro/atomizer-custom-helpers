module.exports = [
  {
    type: 'matcher',
    name: 'BrdsT',
    matcher: 'BrdsT',
    allowParamToValue: true,
    styles: {
      'border-top-left-radius': '$0',
      'border-top-right-radius': '$0'
    }
  },
  {
    type: 'matcher',
    name: 'BrdsB',
    matcher: 'BrdsB',
    allowParamToValue: true,
    styles: {
      'border-bottom-left-radius': '$0',
      'border-bottom-right-radius': '$0'
    }
  },
  {
    type: 'matcher',
    name: 'BrdsStart',
    matcher: 'BrdsStart',
    allowParamToValue: true,
    styles: {
      'border-top-__START__-radius': '$0',
      'border-bottom-__START__-radius': '$0'
    }
  },
  {
    type: 'matcher',
    name: 'BrdsEnd',
    matcher: 'BrdsEnd',
    allowParamToValue: true,
    styles: {
      'border-top-__END__-radius': '$0',
      'border-bottom-__END__-radius': '$0'
    }
  },
];
