import { NextApiRequest, NextApiResponse } from 'next';
const requestIp = require('request-ip');

export default async function getClientIpAddress(req: NextApiRequest, res: NextApiResponse) {
  const detectedIp = requestIp.getClientIp(req);
  res.status(200).json({ ip: detectedIp });
}
