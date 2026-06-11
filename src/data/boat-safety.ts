import { GuidePage } from "./types";

// Boat safety basics for Michigan anglers fishing from boats, canoes, or kayaks.

export const BOAT_SAFETY_PAGE: GuidePage = {
  id: "boat-safety",
  title: "Boat Safety Basics",
  kidTitle: "Boat Safety",
  description:
    "Many Michigan anglers fish from boats — rented, borrowed, or owned. Before you step aboard, know the basics.",
  sections: [
    {
      id: "boat-registration",
      title: "Michigan Boat Registration",
      kidTitle: "Registering a Boat",
      body: [],
      list: [
        "All motorized watercraft in Michigan must be registered with the DNR and display a current registration decal.",
        "Non-motorized craft (canoes, kayaks, paddleboards) do not require registration but must carry one PFD (life jacket) per person.",
        "If renting, the operator provides all required documentation. If borrowing, confirm registration is current before launching.",
      ],
    },
    {
      id: "required-equipment",
      title: "Required Equipment on Every Boat",
      kidTitle: "What Every Boat Needs",
      body: [],
      tables: [
        {
          id: "boat-equipment-table",
          title: "Required Equipment on Every Boat",
          columns: ["Item", "Requirement"],
          rows: [
            { Item: "PFDs (life jackets)", Requirement: "One USCG-approved Type I, II, or III PFD per person on board. Children under 6 must wear one at all times on vessels under 26 feet." },
            { Item: "Throwable device", Requirement: "One Type IV throwable (ring buoy or seat cushion) on boats 16 ft and longer" },
            { Item: "Fire extinguisher", Requirement: "Required on motorized vessels with enclosed spaces. B-1 rated minimum." },
            { Item: "Sound-producing device", Requirement: "A horn or whistle audible for at least ½ mile" },
            { Item: "Navigation lights", Requirement: "Required when operating between sunset and sunrise" },
            { Item: "Registration / card", Requirement: "Must be on board the vessel at all times" },
          ],
        },
      ],
    },
    {
      id: "bui",
      title: "Boating Under the Influence (BUI)",
      kidTitle: "Boating Rules for Adults",
      body: [
        "Operating a boat with a BAC of 0.08% or higher is illegal in Michigan — the same as driving a car. BUI carries serious penalties including fines, license suspension, and potential imprisonment. The Coast Guard and DNR Conservation Officers actively patrol Michigan waters.",
      ],
    },
    {
      id: "practical-tips",
      title: "Practical Tips",
      kidTitle: "Smart Boating Habits",
      body: [],
      list: [
        "**Anchor from the bow (front), never the stern** — anchoring from the stern in current can swamp a boat.",
        "**Keep weight low and centered** — don't let everyone move to one side at once.",
        "**File a float plan** — tell someone where you're launching, where you're going, and when you'll return.",
        "**Check the forecast** — open water on the Great Lakes and large bays can build dangerous waves in 30 minutes. If waves exceed 1/3 of your boat's length, head in.",
        "**Wear a life jacket — especially in spring** — drowning is the leading cause of death in Michigan boating accidents. Cold water incapacitates a swimmer in minutes. A PFD is the single most important piece of safety gear.",
      ],
      kidBody: [
        "Always wear your life jacket on a boat — even if you're a great swimmer! Cold water can make it hard to swim, even for grown-ups.",
      ],
    },
  ],
};
