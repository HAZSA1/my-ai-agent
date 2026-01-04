// Vapi Web SDK Loader
(function() {
    var vapiSDK = {
        run: function(options) {
            const script = document.createElement('script');
            script.src = "https://unpkg.com/@vapi-ai/web@latest/dist/vapi.js";
            script.defer = true;
            script.onload = function() {
                const vapi = new Vapi(options.apiKey);
                vapi.start(options.assistant || options.assistantId);
            };
            document.head.appendChild(script);
        }
    };
    window.vapiSDK = vapiSDK;
})();
