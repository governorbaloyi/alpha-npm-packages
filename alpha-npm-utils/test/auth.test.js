import { verifyToken } from '../src';
import chai from 'chai';
import sinon from 'sinon';
import { StatusCodes } from 'http-status-codes';

const expect = chai.expect;

let req, res, next;

describe('Given verifyToken', () => {
	beforeEach(() => {
		req = {
			headers: {
				authorization: 'Bearer Invalid Token'
			}
		};
		res = {
			status: sinon.spy(),
			json: sinon.spy()
		};
		next = sinon.spy();
	});
	
	it('should return 400 if token is invalid', () => {
		verifyToken(req, res, next);
		
		expect(res.json.calledOnce).to.be.true;
		expect(res.status.firstCall.args[0]).to.equal(StatusCodes.BAD_REQUEST);
		expect(res.json.firstCall.args[0]).to.deep.equal({ message: 'Invalid Access Token' });
	});
	
	it('should return 400 if token is not present', () => {
		req = {};
		
		verifyToken(req, res, next);
		
		expect(res.status.firstCall.args[0]).to.equal(StatusCodes.BAD_REQUEST);
		expect(res.json.firstCall.args[0]).to.deep.equal({ message: 'Access Token is Required' });
	});
});