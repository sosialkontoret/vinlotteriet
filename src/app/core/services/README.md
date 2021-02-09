# Services

## Api Services
*{name}.api.service.ts*

*Should only be injected in the "Regular" service, and not used directly in the application.*

Contains the logic for fetching Api models from the Admin Api.

See Api Models for more info.

## Dto Services
*{name}.dto.service.ts*

*Should only be injected in the "Regular" service, and not used directly in the application.*

This is our integration towards firestore, it should only fetch and insert data in its pure form.
We sometimes need to hydrate data, but that should not be of this service's concern, but rather the "Regular" service.

See Dto Models for more info.

## "Regular" Services
*{name}.service.ts*

*This is the only service to be exposed to our application for use.*

Aggregated up data from both the Api and Dto service. 

It is also responsible for hydrating dto models.


