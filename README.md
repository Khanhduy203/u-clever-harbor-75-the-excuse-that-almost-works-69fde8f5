[![make.fun](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5.svg)](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)
[![Rank](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/Khanhduy203/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/rank.svg)](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)
[![Reward](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/Khanhduy203/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/reward.svg)](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)

# The Excuse That Almost Works

An entry for the [make.fun bounty](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5): one line a gamer texts the boss to skip work on GTA 6 launch week.

The entry line:

> Dentist moved my filling to 8am, anaesthetic lasts four hours, I'll be useless till lunch anyway

A boring, specific, almost-believable detail — a dental filling moved to 8am — with the laugh hiding in the excuse's own logic: "I'll be useless anyway."

## Run

Requires Node 22 or later. No dependencies, no network.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

`main.ts` writes the single entry line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).
