/*
    Define your components here.

    Example:

    Vue.component('message-list', {

    })
*/

Vue.component('app-header', {
    template: `
    <header class="app-header">
        <h2 class="app-header__title">#_general</h2>
        <form class="search-form">
            <input type="search" placeholder="Search" class="reset-text search-field">
        </form>
    </header>
    `
});

Vue.component('app-search-sidebar', {
    template: `
    <aside class="search-sidebar">
        <button aria-label="Close" title="Close" class="reset-button search-sidebar__close"></button> 
        <h2 class="search-sidebar__header">0 Messages</h2>
        <app-mssg-list></app-mssg-list>
    </aside>
    `
});

Vue.component('app-mssg-list', {
    template: `
    <div class="message-list">
        <!-- <div class="message-list__empty">No messages found for ""</div> -->

        <ol class="message-list__list">
            <li class="message">
                <div class="message__header">
                    <img src="images/avatar.png" class="message__avatar">
                    <strong>Anoniempje</strong> 
                    <span class="message__date">11:23:09</span>
                </div>
                <div class="message__content">
                    hello world
                </div>
            </li>
        </ol>
    </div>
    `
});

Vue.component('app-mssg-field', {
    template: `
    <form class="message-field chat-section__field">
        <input type="text" autofocus placeholder="Message" class="reset-text message-field__input">
        <input type="submit" disabled class="message-field__submit">
    </form>
    `
});

Vue.component('app-chat-section-mssgs', {
    template: `
    <div class="chat-section__messages">
        <app-mssg-list></app-mssg-list>
    </div> 
    `
});

Vue.component('app-chat-section', {
    template: `
    <section class="chat-section">
        <app-chat-section-mssgs></app-chat-section-mssgs>
        <app-mssg-field></app-mssg-field>
    </section>
    `
});

Vue.component('app-channel-list', {
    template: `
    <div class="channel-list">
        <h2 class="channel-list__header">Channels</h2>
        <ul>
            <li class="channel-list__item channel-list__item--current">
                <span class="channel-list__bullet">#</span> Daily
            </li>
            <li class="channel-list__item">
                <span class="channel-list__bullet">#</span> General
            </li>
        </ul>
    </div>
    `
});

Vue.component('app-user-profile', {
    template: `
    <div class="user-profile">
        <label for="name" class="user-profile__label">Name</label>
        <input type="text" id="name" value="Anoniempje" class="reset-text user-profile__name">
    </div>
    `
})

Vue.component('app-app-sidebar', {
    template: `
    <aside class="app-sidebar">
        <h1 class="app-sidebar__title">De Voorhoede</h1>
        <app-user-profile></app-user-profile>
        <app-channel-list></app-channel-list>
    </aside> 
    `
});

const app = new Vue({
    el : '.app',

    //Uncomment the next code and list your components inside the app div

    /* template : `<div class="app app--searching">
    
    </div>` */
    template: `
    <div class="app app--searching">
        <app-header></app-header>
        <app-app-sidebar></app-app-sidebar>
        <app-chat-section></app-chat-section>
        <app-search-sidebar></app-search-sidebar>
    </div>
    `
});

Vue.config.devtools = true;