const reportUtils = addItemToSearchBarInteractiveReport();

reportUtils.createReportItems([
    {id: 'item_name', label: 'item_label', value: reportUtils.getInteractiveReportCountRows('item_value')},
    {id: 'item_name', label: 'item_label', value: reportUtils.getCountTagsWithClassName('span.fa-check.u-color-4-text' , 'item_value')},
    {id: 'item_name', label: 'item_label', value: reportUtils.getCountTagsWithClassName('span.fa-remove.u-color-9-text','item_value')}
]);