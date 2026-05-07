# Account Server Migration (Node.js → NestJS)

## 개요
- AWS Serverless 백엔드 API 서버

## 기술 스택
- Runtime: Node.js
- Framework: NestJS (migration 진행 중)
- Cloud: AWS Lambda, API Gateway, RDS, CloudWatch

## 아키텍처
- Serverless 구조: Lambda + API Gateway + RDS 연동
- API Gateway를 통한 Lambda 처리 및 RDS 기반

## 특이점
- Singleton 패턴 기반 Node.js 서버를 NestJS로 마이그레이션 작업 중
- Lambda Cold Start 최소화를 위한 Singleton 구조 설계
- POST 요청 일률화된 RESTful API 구조

## 현재 상태
- NestJS 마이그레이션 진행 중
- Lambda + API Gateway 연동 완료
- VPC 내 Lambda-RDS DB Connection 이슈 해결 중
-  CI/CD 파이프라인 미구축으로 인해 Lambda 환경 대응을 위한 main.ts 수정 작업 병행 중

## Migration 생략 항목
- S3 파일 업로드: 마이그레이션 범위에서 제외
- socket.io (EC2 stateful 서버): Elastic IP billing 이슈로 개인 프로젝트 범위에서 제외
- 서비스 관련 비즈니스 로직: 보안상 삭제
