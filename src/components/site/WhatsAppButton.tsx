const PHONE = "34654721099";
const MESSAGE = "Hola, me interesa saber más sobre vuestros servicios de IA";

export function WhatsAppButton() {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      style={{ backgroundColor: "#25D366" }}
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full animate-ping opacity-30"
        style={{ backgroundColor: "#25D366" }}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="relative h-7 w-7"
        fill="white"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.328.158-.688.158-1.045 0-.13 0-.27-.014-.4-.044-.115-.23-.187-.402-.272-.301-.156-1.832-.903-2.005-.903zM16.062 26c-1.95 0-3.84-.572-5.456-1.647l-3.81 1.218 1.232-3.683A9.85 9.85 0 0 1 6.196 16.1c0-5.444 4.422-9.866 9.866-9.866 5.443 0 9.864 4.422 9.864 9.866 0 5.443-4.42 9.864-9.864 9.864zm0-21.733C9.626 4.267 4.4 9.493 4.4 15.927c0 2.193.6 4.33 1.748 6.196L4 28l6.062-1.92a11.694 11.694 0 0 0 6 1.65c6.434 0 11.66-5.226 11.66-11.66S22.495 4.267 16.062 4.267z" />
      </svg>
    </a>
  );
}
