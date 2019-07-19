Vue.component('message-list', {
    props : {
        messages : {
            type : Array,
            default : () => {
                return [];
            },
            required : true
        }
    },

    template : `
        <div class="message-list">
            <div v-if="messages.length === 0" class="message-list__empty">
                No messages
            </div>

            <transition-group class="message-list__list" name="slide" tag="ol">
                <template v-for="message of messages">
                    <text-message 
                        v-if="message.type === 'text'"
                        :key="message.id" 
                        :date="message.date"
                        :user="message.user"
                        :text="message.text">
                    </text-message>

                    <cat-message 
                        v-else-if="message.type === 'cat'"
                        :key="message.id" 
                        :date="message.date"
                        :user="message.user">
                    </cat-message>
                </template>
            </ol>
        </div>
    `
});