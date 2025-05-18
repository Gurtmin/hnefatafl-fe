export function connectWebSocket(onMessage: (data: string) => void) {
    const socket = new WebSocket("wss://hnefatafl-ws.onrender.com/ws/game");

    socket.onopen = () => {
        console.log("WEBSOCKET - connected: ", socket.url);
    };

    socket.onmessage = (event) => {
        console.log("WEBSOCKET - message received:", event.data);
        onMessage(event.data);
    };

    socket.onerror = (err) => {
        console.error("WEBSOCKET error:", err);
    };

    socket.onclose = () => {
        console.log("WEBSOCKET closed: ", socket.url);
    };

    return socket;
}
