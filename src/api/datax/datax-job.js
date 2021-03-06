import request from '@/router/axios';
import {baseUrl} from '@/config/env';

// 任务管理

export function runJob(data) {
  return request({
    url: baseUrl+'/datax/job/runJob',
    method: 'post',
    data
  })
}

export function runJobLog(data) {
  return request({
    url: baseUrl+'/datax/job/runJobLog',
    method: 'post',
    data
  })
}
