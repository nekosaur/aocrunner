import { spawnSync } from "child_process"
import kleur from "kleur"

const runSolution = (day: number, path: string, lang: "ts" | "js") => {
  console.log(kleur.blue(`\n-- Day ${day} `.padEnd(40, "-") + "\n"))
  spawnSync(lang === "ts" ? "tsx" : "node", [path], {
    stdio: "inherit",
    shell: true,
  })
  console.log(kleur.blue("\n".padEnd(40, "-")))
}

export default runSolution
