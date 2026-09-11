import type { OgCard } from "@/content/og-cards";

const disciplines = ["Strategy", "Experience", "Systems", "Intelligence"];

type OpenGraphIdentityProps = {
  card: OgCard;
};

export function OpenGraphIdentity({ card }: OpenGraphIdentityProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        color: "#f7f8f6",
        background: "#0b100e",
        fontFamily: "Geist",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 32,
          display: "flex",
          border: "1px solid #33413c",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 32,
          right: 32,
          bottom: 32,
          width: 276,
          display: "flex",
          flexDirection: "column",
          borderLeft: "1px solid #33413c",
        }}
      >
        <div
          style={{
            height: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "0 30px",
            borderBottom: "1px solid #33413c",
            color: "#7b9189",
            fontSize: 15,
            fontWeight: 500,
            letterSpacing: "0.16em",
          }}
        >
          MN / {card.index}
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {disciplines.map((discipline, index) => (
            <div
              key={discipline}
              style={{
                minHeight: 86,
                display: "flex",
                alignItems: "center",
                position: "relative",
                padding: "0 30px 0 54px",
                borderTop: index === 0 ? "1px solid #23302b" : "0px solid transparent",
                borderBottom: "1px solid #23302b",
                color: index === disciplines.length - 1 ? "#d5e4de" : "#71827c",
                fontSize: 15,
                fontWeight: 520,
                letterSpacing: "0.08em",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 25,
                  width: 8,
                  height: 8,
                  display: "flex",
                  border: index === disciplines.length - 1 ? "2px solid #00a483" : "1px solid #607870",
                  background: index === disciplines.length - 1 ? "#00a483" : "#0b100e",
                }}
              />
              {discipline}
            </div>
          ))}
        </div>

        <div
          style={{
            height: 72,
            display: "flex",
            alignItems: "center",
            padding: "0 30px",
            borderTop: "1px solid #33413c",
            color: "#00a483",
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "0.14em",
          }}
        >
          SIGNAL / ACTIVE
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: 32,
          top: 32,
          right: 308,
          height: 72,
          display: "flex",
          alignItems: "center",
          padding: "0 38px",
          borderBottom: "1px solid #33413c",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#f7f8f6",
            fontSize: 18,
            fontWeight: 650,
            letterSpacing: "0.14em",
          }}
        >
          <div style={{ width: 30, height: 2, display: "flex", background: "#00a483" }} />
          {card.brand}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: 70,
          top: 134,
          width: 770,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#00a483",
            fontSize: 17,
            fontWeight: 620,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {card.eyebrow}
        </div>
        <div
          style={{
            maxWidth: 760,
            display: "flex",
            marginTop: 27,
            color: "#f7f8f6",
            fontSize: card.headline.length > 35 ? 70 : 78,
            fontWeight: 500,
            letterSpacing: "-0.045em",
            lineHeight: 0.98,
          }}
        >
          {card.headline}
        </div>
        <div
          style={{
            maxWidth: 740,
            display: "flex",
            marginTop: 30,
            color: "#d5e4de",
            fontSize: 24,
            fontWeight: 520,
            letterSpacing: "-0.018em",
            lineHeight: 1.2,
          }}
        >
          {card.architecture}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: 32,
          right: 308,
          bottom: 32,
          minHeight: 92,
          display: "flex",
          alignItems: "center",
          padding: "18px 38px",
          borderTop: "1px solid #33413c",
        }}
      >
        <div
          style={{
            maxWidth: 760,
            display: "flex",
            color: "#9ba9a4",
            fontSize: 21,
            fontWeight: 420,
            letterSpacing: "-0.015em",
            lineHeight: 1.35,
          }}
        >
          {card.supportingSentence}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: 304,
          bottom: 119,
          width: 9,
          height: 9,
          display: "flex",
          background: "#00a483",
        }}
      />
    </div>
  );
}
