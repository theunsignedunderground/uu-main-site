import runJob from "./_run";
export default function handler(req, res) {
  return runJob(req, res, "pr");
}
