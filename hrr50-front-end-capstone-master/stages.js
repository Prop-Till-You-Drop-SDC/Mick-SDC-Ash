//https://k6.io/docs/getting-started/running-k6
import http from 'k6/http';
import { check, sleep } from 'k6';
export let options = {
  stages: [
    { target: 10, duration: '30s' },
    { target: 100, duration: '30s' },
    { target: 1000, duration: '30s' },
    { target: 10000, duration: '30s' }
  ],
};
export default function () {
  let res = http.get('http://localhost:3123/photos');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}