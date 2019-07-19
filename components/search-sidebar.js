Vue.component('search-sidebar', {
    data : function () {
        return window.chat;
    },

    template : `
        <transition name="fade">
        <aside class="search-sidebar" v-if="isSearching">
            <button class="reset-button search-sidebar__close" v-on:click="searching = false" aria-label="Close" title="Close"></button>
            <h2 class="search-sidebar__header">{{ header }}</h2>
            <message-list v-bind:messages="filteredMessages"></message-list>
        </aside>
        </transition>
    `,

    computed : {
        isSearching(){
            return this.searchText != ''
        },
        filteredMessages() {
            return this.messages.filter(message => message.text.indexOf(this.searchText) > -1);
        },
        header() {
            return `${this.filteredMessages.length} Message` + (this.filteredMessages.length !== 1 ? 's' : '');
        }
    }
});