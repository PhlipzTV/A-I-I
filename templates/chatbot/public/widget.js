(function () {
  const root = document.getElementById("aii-chat-widget");
  if (!root) return;

  let widgetConfig = { title: "Assistent", greeting: "Hallo! Wie kann ich helfen?", accentColor: "#3b82f6" };
  const history = [];

  root.innerHTML = `
    <button class="aii-chat-toggle" aria-label="Chat öffnen">💬</button>
    <div class="aii-chat-panel">
      <div class="aii-chat-header"></div>
      <div class="aii-chat-messages"></div>
      <form class="aii-chat-form">
        <input type="text" placeholder="Ihre Nachricht ..." required autocomplete="off">
        <button type="submit">Senden</button>
      </form>
    </div>
  `;

  const toggle = root.querySelector(".aii-chat-toggle");
  const panel = root.querySelector(".aii-chat-panel");
  const header = root.querySelector(".aii-chat-header");
  const messagesEl = root.querySelector(".aii-chat-messages");
  const form = root.querySelector(".aii-chat-form");
  const input = form.querySelector("input");

  function addMessage(role, text, pending) {
    const el = document.createElement("div");
    el.className = `aii-msg ${role}${pending ? " pending" : ""}`;
    el.textContent = text;
    messagesEl.appendChild(el);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return el;
  }

  fetch("/api/widget-config")
    .then((r) => r.json())
    .then((cfg) => {
      widgetConfig = { ...widgetConfig, ...cfg };
      root.style.setProperty("--accent", widgetConfig.accentColor || "#3b82f6");
      header.textContent = widgetConfig.title;
      addMessage("bot", widgetConfig.greeting);
    })
    .catch(() => {
      header.textContent = widgetConfig.title;
      addMessage("bot", widgetConfig.greeting);
    });

  toggle.addEventListener("click", () => panel.classList.toggle("is-open"));

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    input.value = "";
    addMessage("user", text);
    history.push({ role: "user", content: text });

    const pendingEl = addMessage("bot", "...", true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      const data = await res.json();
      pendingEl.remove();
      if (data.reply) {
        addMessage("bot", data.reply);
        history.push({ role: "assistant", content: data.reply });
      } else {
        addMessage("bot", data.error || "Entschuldigung, da ist etwas schiefgelaufen.");
      }
    } catch {
      pendingEl.remove();
      addMessage("bot", "Verbindung fehlgeschlagen. Bitte später erneut versuchen.");
    }
  });
})();
