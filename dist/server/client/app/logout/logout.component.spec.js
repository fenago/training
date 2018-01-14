"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var logout_component_1 = require("./logout.component");
var auth_service_1 = require("../services/auth.service");
describe('LogoutComponent', function () {
    var component;
    var fixture;
    var authService;
    var authServiceStub;
    beforeEach(testing_1.async(function () {
        authServiceStub = {
            loggedIn: true,
            logout: (function () {
                this.loggedIn = false;
            })
        };
        testing_1.TestBed.configureTestingModule({
            declarations: [logout_component_1.LogoutComponent],
            providers: [{ provide: auth_service_1.AuthService, useValue: authServiceStub }],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(logout_component_1.LogoutComponent);
        component = fixture.componentInstance;
        authService = fixture.debugElement.injector.get(auth_service_1.AuthService);
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('should logout the user', function () {
        authService.loggedIn = true;
        expect(authService.loggedIn).toBeTruthy();
        authService.logout();
        expect(authService.loggedIn).toBeFalsy();
    });
});
//# sourceMappingURL=logout.component.spec.js.map