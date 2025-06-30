import Pagination from "tui-pagination";
import "tui-pagination/dist/tui-pagination.css";

export const renderPagination = (currentPage, totalPages, onPageChange, itemsPerPage = 8) => {
    const paginationContainer = document.getElementById("pagination");
    if (!paginationContainer) return;

    // Clear previous pagination if needed
    paginationContainer.innerHTML = "";

    const options = {
        totalItems: totalPages * itemsPerPage,
        itemsPerPage: itemsPerPage,
        visiblePages: 2,
        page: currentPage,
        centerAlign: false,
        template: {
            page: '<a href="#" class="tui-page-btn">{{page}}</a>',
            currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
            moveButton: '<a href="#" class="tui-page-btn tui-{{type}}">' + '<span class="tui-ico-{{type}}">{{type}}</span>' + "</a>",
            disabledMoveButton: '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' + '<span class="tui-ico-{{type}}">{{type}}</span>' + "</span>",
            moreButton: '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' + '<span class="tui-ico-ellip">...</span>' + "</a>",
        },
    };

    const pagination = new Pagination(paginationContainer, options);

    pagination.on("afterMove", (event) => {
        const newPage = event.page;
        onPageChange(newPage);
    });
};
