import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Injectable({
	providedIn: 'root',
})
export class ToastAlert {
	constructor(private notificationComponente: NotificationsService) {}

	toastSuccess(title: string, message: string) {
		this.notificationComponente.success(title, message, {
			timeOut: 3000,
			showProgressBar: true,
			preventLastDuplicates: true,
			preventDuplicates: true,
			theClass: 'notification-sucess',
		});
	}

	toastFailure(title: string, message: string = '') {
		this.notificationComponente.error(title, message, {
			timeOut: 3000,
			showProgressBar: true,
			theClass: 'error-class',
		});
	}

	toastWarning(title: string, message: string) {
		this.notificationComponente.info(title, message, {
			timeOut: 3000,
			showProgressBar: true,
			theClass: 'error-class',
		});
	}
}
