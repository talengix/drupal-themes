(function ($) {
	"use strict";
	Drupal.behaviors.tableView = {
	  attach: function attach(context, settings) {
			var dlData = settings.dynamicListData;
			const CONSTANT = {
				DEFAULT_PAGE_SIZE: 5,
				DEFAULT_PAGE_NO: 1,
				ZERO: 0,
				ONE: 1,
				TABLE_COLUMNS: dlData['colData'],
				COLUMNS_TO_FILTER: dlData['filterCols'],
				IDENTIFIERS: {
					SEARCH_TERM: 'search-term',
					LOAD_MORE: 'load-more',
					SELECTABLE: 'selectable',
				},
				STYLES: {
					NONE: 'none',
					BLOCK: 'block',
				},
				EVENTS: {
					CLICK: 'click',
					KEY_UP: 'keyup',
					CHANGE: 'change',
				},
				COLUMN_SELECTION: dlData['selectCols'],
			};
			// Table Data
			let tableData = dlData['tableData'];
			let filterData = [];
			// Defined Constants
			const filterByColumns = CONSTANT.COLUMNS_TO_FILTER;
			const selectableColumns = CONSTANT.COLUMN_SELECTION;


			let table = new Tabulator('#table', {
				layout: 'fitColumns',
				movableColumns: true,
				data: tableData,
				columns: CONSTANT.TABLE_COLUMNS,
				pagination:"local",
				paginationSize:50,
				paginationSizeSelector:[50, 100],
			});

			// DOM variable
			let searchTerm = document.getElementById(CONSTANT.IDENTIFIERS.SEARCH_TERM);
			let selectable = document.getElementById(CONSTANT.IDENTIFIERS.SELECTABLE);


			const filterByDefinedColumns2 = (data) => {
				let hasData = false;
				filterByColumns.map((column) => {
					if (
						String(data[column])
							.toLowerCase()
							.includes(searchTerm.value.toLowerCase())
					) {
						hasData = true;
					}
				});
				return hasData;
			};


		/**
		 *  @desc Fires whenever there is a change in search term
		 */
		const onSearchChange = () => {
			filterData = tableData.filter(filterByDefinedColumns2);
			table.clearData();
			filterBasedOnSelect(filterData);
		};

		  const stripHtml = (htmlText) => {
			  // Create a new div element
			  var temporalDivElement = document.createElement("div");
			  // Set the HTML content with the providen
			  temporalDivElement.innerHTML = htmlText;
			  // Retrieve the text property of the element (cross-browser support)
			  return temporalDivElement.textContent || temporalDivElement.innerText || "";
		  };


			// Render Selectable Options Dynamically
			const renderSelectable = () => {
				Object.keys(selectableColumns).map((select) => {
					const selectElementWrapper = document.createElement('div');
					selectElementWrapper.className = 'form-item__dropdown';
					const selectElement = document.createElement('select');
					selectElement.className = 'form-select form-item__select';
					var elementExists = document.getElementById(select);
					if (!elementExists) {
						selectElementWrapper.appendChild(selectElement);
						selectable.appendChild(selectElementWrapper);
						selectElement.setAttribute('id', select);
						const optionElement = document.createElement('option');
						optionElement.text = selectableColumns[select].placeholder;
						optionElement.value = '';
						optionElement.selected = true;
						selectElement.appendChild(optionElement);

						tableData.map((data, index) => {
							const existingIndex = [...selectElement.options].findIndex(
								(option) => option.value === data[select],
							);
							if (existingIndex === -CONSTANT.ONE) {
								const optionSecureValue = stripHtml(data[select]);
								if(optionSecureValue === data[select]) {
									const optionElement = document.createElement('option');
									optionElement.text = optionSecureValue;
									optionElement.value = optionSecureValue;
									selectElement.appendChild(optionElement);
								}
							}
						});
					}
				});
			};

			// Dynamic Listener for Selectable
			Object.keys(selectableColumns).map((select) => {
				document.addEventListener('change', (event) => {
					if (event.target.id !== 'search-term') {
						selectableColumns[event.target.id].value = event.target.value;
						filterBasedOnSelect(tableData);
					}
				});
			});

			const filterBasedOnSelect = (data) => {
				filterData = data.filter((item) => {
					const hasData = [];
					const colVal = [];
					Object.keys(selectableColumns).map((column) => {
						if (
							item[column].includes(selectableColumns[column].value) &&
							selectableColumns[column].value !== ''
						) {
							hasData.push(selectableColumns[column].value);
						}
						if (selectableColumns[column].value !== '') {
							colVal.push(selectableColumns[column].value);
						}
					});
					return hasData.length === colVal.length;
				});
				table.clearData();
				table.addData(filterData);
			};

			// Event Listeners
		    if (filterByColumns.length) {
			    searchTerm.addEventListener(CONSTANT.EVENTS.KEY_UP, onSearchChange);
			    searchTerm.addEventListener(CONSTANT.EVENTS.CHANGE, onSearchChange);
		    }
		    else {
			   $(searchTerm).closest('.col-sm').addClass('hidden');
		    }
			// Init Render Selectable
			renderSelectable();
		}
	}
})(jQuery);
