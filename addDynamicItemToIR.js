function addItemToSearchBarInteractiveReport() {

    function IR_filterExists() {
        return $('.a-IRR-controls-item--filter input.a-IRR-controlsCheckbox:not(checked) , .a-IRR-controlsLabel input.a-IRR-controlsCheckbox:not(checked)').length > 0;
    }

    // Function to add interactive report items
    function addInteractiveReportItem(id, label, value) {
        const itemHtml = `
        <div style="display: flex; align-items: center; gap: 10px; margin-right: 15px;" class="show-count-item">
            <label for="${id}" style="margin: 0; white-space: nowrap;">${label}</label>
            <input type="text"
                   id="${id}"
                   name="${id}"
                   class="text_field apex-item-text readonly report-item"
                   size="30"
                   value="${value}"
                   readonly/>
        </div>`;
        
        $('#custom-irr-items').append(itemHtml);
    }

    return {
        getInteractiveReportCountRows: function(pItemValue) {
            const htmlData = $('li span.a-IRR-pagination-label');
            
            if (!htmlData.length) {
                return pItemValue;
            }
            
            const totalVal = htmlData.text().trim();
            const totalMatch = totalVal.match(/از\s+(\d+)/);
            
            if (totalMatch && totalMatch[1]) {
                return parseInt(totalMatch[1], 10);
            }
            
            const rangeMatch = totalVal.match(/\d+\s*-\s*(\d+)/);
            if (rangeMatch && rangeMatch[1]) {
                return parseInt(rangeMatch[1], 10);
            }
            
            return 0;
        },
        
        getCountTagsWithClassName: function(pClassName, pItemValue) {
            return IR_filterExists() ? $(pClassName).length : pItemValue;
        },
        
        createReportItems: function(items) {
            if (!$('#custom-irr-items').length) {
                $('.a-IRR-controls').append(`
                    <div id="custom-irr-items" style="display: flex; align-items: center; flex-wrap: wrap; gap: 10px; padding: 5px;"></div>
                `);
            }
            
            items.forEach(item => {
                addInteractiveReportItem(item.id, item.label, item.value);
            });
        }
    };
}