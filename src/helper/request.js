import axios from 'axios';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

let host = 'https://dev.profescipta.co.id/so-api/';

export function useGet() {
  const {authReducer} = useSelector(s => s);

  const [successRes, setSuccessRes] = useState({});
  const [errorsRes, setErrorsRes] = useState({});

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  function req(args = {}, endpoint = '') {
    setLoading(true);
    setSuccessRes({});
    setErrorsRes({});
    setSuccess(false);
    setFailed(false);

    const url = `${host}${endpoint}`;

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + authReducer.access_token.value,
        state: '12345',
      },
      params: args,
      url,
    };
    axios(options)
      .then(res => {
        console.log('res', res);
        setSuccessRes(res);
        setFailed(false);
        setSuccess(true);
        setLoading(false);
      })
      .catch(e => {
        setErrorsRes(e.response);
        setSuccessRes({});
        setFailed(true);
        setSuccess(false);
        setLoading(false);
        console.log('error :', e);
      });
  }

  const feedback = {
    success_res: successRes.data,
    error_res: errorsRes,
    loading: loading,
    success: success,
    failed: failed,
  };
  return [req, feedback];
}

//without Authorization
export function usePostnoAuth(endpoint = '') {
  const [successRes, setSuccessRes] = useState({});
  const [errorsRes, setErrorsRes] = useState({});

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  function req(args = {}) {
    setLoading(true);
    setSuccessRes({});
    setErrorsRes({});
    setSuccess(false);
    setFailed(false);

    const url = `${host}${endpoint}`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/x-www-form-urlencoded',
      },
      data: args,
      url,
    };

    axios(options)
      .then(res => {
        console.log('res :', res);
        setSuccessRes(res);
        setFailed(false);
        setSuccess(true);
        setLoading(false);
      })
      .catch(e => {
        setErrorsRes(e.response);
        setSuccessRes({});
        setFailed(true);
        setSuccess(false);
        setLoading(false);
        console.log('error :', e);
      });
  }

  const feedback = {
    success_res: successRes.data,
    error_res: errorsRes,
    loading: loading,
    success: success,
    failed: failed,
  };
  return [req, feedback];
}

//With Authorization
export function usePost(endpoint = '') {
  const {authReducer} = useSelector(s => s);

  const [successRes, setSuccessRes] = useState({});
  const [errorsRes, setErrorsRes] = useState({});

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  function req(args = {}) {
    setLoading(true);
    setSuccessRes({});
    setErrorsRes({});
    setSuccess(false);
    setFailed(false);

    const url = `${host}${endpoint}`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + authReducer.access_token.value,
        state: '12345',
      },
      data: args,
      url,
    };

    axios(options)
      .then(res => {
        console.log('res :', res);
        setSuccessRes(res);
        setFailed(false);
        setSuccess(true);
        setLoading(false);
      })
      .catch(e => {
        setErrorsRes(e.response);
        setSuccessRes({});
        setFailed(true);
        setSuccess(false);
        setLoading(false);
        console.log('error :', e);
      });
  }

  const feedback = {
    success_res: successRes.data,
    error_res: errorsRes,
    loading: loading,
    success: success,
    failed: failed,
  };
  return [req, feedback];
}
